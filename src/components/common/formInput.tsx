type InputProps = {
  id: string
  label: string
  type: string
  placeholder?: string
  value?: string
}

type TextAreaProps = {
  id: string
  label: string
  placeholder?: string
  value?: string
}

export function FormInput({ id, label, type, placeholder, value }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        className="rounded-md bg-gray-100 px-3 py-1"
      />
    </div>
  )
}

export function FormTextArea({ id, label, placeholder, value }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        rows={2}
        placeholder={placeholder}
        value={value}
        className="rounded-md bg-gray-100 px-3 py-1"
      />
    </div>
  )
}
