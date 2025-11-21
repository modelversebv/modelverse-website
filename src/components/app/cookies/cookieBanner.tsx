import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Switch } from '@/components/ui/switch'
import { Cookie, Settings, Shield, X } from 'lucide-react'
import { getCookie, setCookie } from 'typescript-cookie'

import { Card } from '../misc/card'

type Cookie = {
  title: string
  desc: string
}

type CookieBannerProps = {
  preferences: boolean
  setPreferences: (value: boolean) => void
}

export function CookieBanner({
  preferences,
  setPreferences,
}: CookieBannerProps) {
  const cookies = [
    {
      title: 'Functional Cookies',
      desc: 'These cookies allow external content, such as YouTube and GoogleMaps, to be displayed on our website. Without them, certain components will not be available.',
    },
    // {
    //   title: 'Analytical Cookies',
    //   desc: 'These cookies help us understand how visitors use the website. They collect anonymous data to improve site performance and content.',
    // },
  ]

  const navigate = useNavigate()

  const COOKIE_CONSENT = 'user-preferences'
  const CONSENT_UPDATE_EVENT = 'consentUpdate'

  // Banner and Animation states
  const [showBanner, setShowBanner] = useState(() => {
    const consentCookie = getCookie(COOKIE_CONSENT)
    if (!consentCookie) return true
    return false
  })
  const [animateBanner, setanimateBanner] = useState(false)

  const [showPreferences, setShowPreferences] = useState(preferences)

  // Cookie states
  const [choices, setChoices] = useState<boolean[]>(() =>
    cookies.map(() => false)
  )
  const setChoiceAt = (index: number, value?: boolean) => {
    setChoices((prev) => {
      const next = [...prev]
      next[index] = typeof value === 'boolean' ? value : !next[index]
      return next
    })
  }

  // Button functions
  const handleSave = () => {
    const consent = cookies.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = choices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleAccept = () => {
    const newChoices = new Array(choices.length).fill(true)
    setChoices(newChoices)
    const consent = cookies.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = newChoices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleReject = () => {
    const newChoices = new Array(choices.length).fill(false)
    setChoices(newChoices)
    const consent = cookies.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = newChoices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleManage = () => {
    setShowPreferences(true)
  }

  useEffect(() => {
    requestAnimationFrame(() => setanimateBanner(true))
  }, [])

  useEffect(() => {
    const handlePreferencesChange = () => {
      if (preferences) {
        const consentCookie = getCookie(COOKIE_CONSENT)
        if (!consentCookie) return
        const userPreferences = JSON.parse(consentCookie)

        const newChoices = cookies.map((cookie: Cookie) => {
          const key = cookie.title.toLowerCase().replace(' ', '-')
          return userPreferences[key] ?? false
        })
        setChoices(newChoices)

        setShowBanner(true)
        setShowPreferences(true)
      }
    }
    handlePreferencesChange()
  }, [preferences])

  return (
    <div
      className={`fixed top-0 z-999 h-screen w-screen bg-black/30 p-4 backdrop-blur-sm ${showBanner ? 'block' : 'hidden'}`}
    >
      <div className="container mx-auto flex size-full items-end-safe justify-center-safe">
        <Card
          className={`max-h-2/3 w-full max-w-4xl gap-4 bg-white p-4 shadow-lg transition duration-500 ${animateBanner ? '-translate-y-0' : 'translate-y-full'} ${showPreferences && 'p-0'}`}
        >
          {!showPreferences ? (
            <>
              <div className="flex flex-row gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                  <Cookie className="size-6 text-amber-500" />
                </div>
                <div className="flex grow flex-col gap-4">
                  <h1 className="text-xl">We Value Your Privacy</h1>
                  <ScrollArea className="max-h-48 text-gray-600 md:max-h-none">
                    <p className="text-gray-600">
                      We use two third-party services: Google Maps and YouTube
                      to enhance your browser experience. These services may set
                      cookies and process your data. By clicking 'Accept All',
                      you consent to our use of cookies; otherwise, content from
                      these two services will not be accessible unless you later
                      decide to modify your preferences. You can customize your
                      preferences or learn more in our{' '}
                      <button
                        className="cursor-pointer font-semibold text-amber-500 hover:underline"
                        onClick={() => {
                          handleReject()
                          navigate('/cookie_policy')
                        }}
                      >
                        Cookie Policy
                      </button>
                      .
                    </p>
                  </ScrollArea>
                </div>
                <button
                  className="size-fit cursor-pointer text-gray-400 transition-all duration-300 hover:text-black"
                  onClick={handleSave}
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <button
                  className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 md:w-fit"
                  onClick={handleAccept}
                >
                  Accept All
                </button>

                <button
                  className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 md:w-fit"
                  onClick={handleAccept}
                >
                  Reject All
                </button>

                <button
                  className="group flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border px-4 py-2 font-semibold transition-all duration-300 hover:bg-gray-200 md:w-fit"
                  onClick={handleManage}
                >
                  <Settings className="size-4 transition-all duration-300 group-hover:rotate-45" />
                  Customize
                </button>
              </div>
            </>
          ) : (
            <div className="scrollbar-hide overflow-auto p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                    <Settings className="size-6 text-amber-500" />
                  </div>
                  <div className="flex grow flex-col gap-4">
                    <h1 className="text-xl">Cookie Preferences</h1>
                    <p className="text-gray-600">
                      Manage your cookie settings. You can enable or disable
                      different types of cookies below.
                    </p>
                  </div>
                  <button
                    className="size-fit cursor-pointer text-gray-400 transition-all duration-300 hover:text-black"
                    onClick={handleSave}
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  <Card className="gap-4 bg-gray-100 p-4">
                    <div className="flex flex-row items-center-safe gap-2">
                      <Shield className="size-5 text-amber-500" />
                      <span className="font-semibold">Essential Cookies</span>
                      <Switch
                        className="tran ml-auto from-green-500 to-teal-500 data-[state=checked]:bg-gradient-to-r data-[state=unchecked]:bg-gray-300"
                        checked
                        disabled
                      />
                    </div>
                    <p className="text-gray-600">
                      Required for the website to function. These cannot be
                      disabled.
                    </p>
                  </Card>
                  {cookies.map((cookie: Cookie, index: number) => (
                    <Card className="gap-4 p-4" key={index}>
                      <div className="flex flex-row items-center-safe gap-2">
                        <span className="font-semibold">{cookie.title}</span>
                        <Switch
                          className="ml-auto from-green-500 to-teal-500 data-[state=checked]:bg-gradient-to-r data-[state=unchecked]:bg-gray-300"
                          onCheckedChange={() => setChoiceAt(index)}
                          checked={choices[index]}
                        />
                      </div>
                      <p className="text-gray-600">{cookie.desc}</p>
                    </Card>
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                  <button
                    className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 md:w-fit"
                    onClick={handleAccept}
                  >
                    Accept All
                  </button>
                  <button
                    className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 md:w-fit"
                    onClick={handleReject}
                  >
                    Reject All
                  </button>

                  <button
                    className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 md:ml-auto md:w-fit"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="group flex cursor-pointer flex-row items-center-safe justify-center-safe gap-2 rounded-full border px-4 py-2 font-semibold transition-all duration-300 hover:bg-gray-200 md:w-fit"
                    onClick={() => setShowPreferences(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
