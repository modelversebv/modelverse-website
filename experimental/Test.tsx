import { useEffect } from "react";
import { Hero } from "@/components/app/misc/hero";
import { Layout } from "@/components/layout";
import * as echarts from "echarts";

const TestHero = (
    <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
        <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
            <p className="text-sm">Experimental features</p>
        </div>
        <h1 className="text-5xl sm:text-6xl">Test page</h1>
        <p className="text-xl text-gray-600">Used for experimental features and testing.</p>
    </Hero>
);

export function TestPage() {
    useEffect(() => {
        const chartDom = document.getElementById("radarChart");
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            myChart.setOption({
                title: { text: "Office snacking" },
                legend: { data: ["sweet", "savoury"] },
                radar: {
                    indicator: [
                        { name: "Sjors", max: 100 },
                        { name: "Matei", max: 100 },
                        { name: "Ben", max: 100 },
                        { name: "Daan", max: 100 },
                        { name: "Lili", max: 100 },
                        { name: "Mariona", max: 100 },
                        { name: "Reshma", max: 100 },
                        { name: "Bozhena", max: 100 }]
                },
                series: [
                    {
                        type: "radar",
                        data: [
                            {
                                value: [90, 100, 20, 20, 70, 80, 40, 60],
                                name: "sweet"
                            },
                            {
                                value: [80, 90, 50, 50, 60, 100, 60, 70],
                                name: "savoury"
                            }
                        ]
                    }
                ]
            });
        }
    }, []); // runs only once after component mounts

    return (
        <Layout test={true} hero={TestHero}>
            {/* Metadata */}
            <title>Modelverse | Test page</title>
            <meta
                name="description"
                content="Test-page which is used for experimental features."
            />

            {/* Content */}
            <div className="bg-gray-50 p-4">
                {/* Chart container */}
                <div id="radarChart" style={{ width: "600px", height: "400px" }}>
                </div>
            </div>
        </Layout >
    )
}