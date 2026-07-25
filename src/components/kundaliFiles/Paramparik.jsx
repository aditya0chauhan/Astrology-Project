import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Loader from '../../utils/buttons/Loader'
import svgCache from '../../utils/svgCache'

const Paramparik = ({ userData }) => {
  const { t } = useTranslation()
  const [chartData, setChartData] = useState(null)
  const [kundaliData, setKundaliData] = useState(null)
  const [loading, setLoading] = useState(false)


  const normalizeSvg = (svgText) => {
    if (!svgText) return ''
    let s = svgText.replaceAll('\\"', '"').replaceAll('\\n', ' ').trim()
    if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1)
    const idx = s.indexOf('<svg')
    if (idx !== -1) {
      s = s.slice(idx)
      const endIdx = s.lastIndexOf('</svg>')
      if (endIdx !== -1) s = s.slice(0, endIdx + 6)
      if (!/xmlns\s*=/.test(s)) {
        s = s.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
      }
    }
    return s
  }

  useEffect(() => {
    if (!userData) return
    let cancelled = false
    const { formattedDate, time, latitude, longitude } = userData
    const key = `${formattedDate}_${time}_${latitude}_${longitude}`
    if (svgCache.has(key)) {
      const cached = svgCache.get(key)
      setKundaliData(cached.kundaliData)
      setChartData(cached.chartData)
      return
    }

    const fetchAll = async () => {
      setLoading(true)
      try {
      
        const response = await axios.get(
          '/.netlify/functions/proxy/api/horoscope/ascendant-report',
          {
            params: {
              date: formattedDate,
              time: time,
              latitude: latitude,
              longitude: longitude,
              tz: 5.5,
              lang: 'hi',
            }
          }
        )

        const kundali = response.data.response?.[0]

        const chartResponse = await fetch(
          `/.netlify/functions/proxy/api/chart_image/d1?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&style=north&lang=hi&colored_planets=true`)
        const chartSvg = await chartResponse.text()
        const cleanSvg = normalizeSvg(chartSvg)

        if (!cancelled) {
          setKundaliData(kundali)
          setChartData(cleanSvg)
          svgCache.set(key, { kundaliData: kundali, chartData: cleanSvg })
        }
      } catch (error) {
        console.error(error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchAll()
    return () => {
      cancelled = true
    }
  }, [userData])

  if (loading) return (
    <div className='min-h-[50vh] w-full flex justify-center items-center mt-10 rounded-xl bg-[#0f172a] p-6'>
      <Loader />
    </div>
  )

  return (
    <div className='mt-5'>
      {chartData && (
        <div className="bg-white rounded-xl flex flex-col justify-start items-start">
          <h2 className="w-full text-blue-600 text-2xl font-bold mb-4 text-center mt-5 ">
            जन्म कुंडली
          </h2>
          <div className='chart-inner w-full rounded-lg bg-white pr-10 lg:p-4 lg:flex justify-center items-center'>
            <div className="chart-svg-wrapper w-full lg:w-[60%] lg:m-auto" dangerouslySetInnerHTML={{ __html: chartData }} />
          </div>
        </div>
      )}

      {kundaliData && (

        <div className="mt-10 bg-white p-6 rounded-xl">

          <h2 className="text-blue-400 text-2xl font-bold mb-4">
            {t("kundalireport")}
          </h2>

          <div className="text-black space-y-3  ">

            <p><strong className='font-semibold'>{t("ascendant")} : </strong> {kundaliData?.ascendant}</p>
            <p><strong className='font-semibold'>{t("ascendantLord")} : </strong> {kundaliData?.ascendant_lord}</p>
            <p><strong className='font-semibold'> {t("luckyGem")} : </strong> {kundaliData?.lucky_gem}</p>

            <p><strong className='font-semibold'>{t("fasting")} : </strong> {kundaliData?.day_for_fasting}</p>

            <p><strong className='font-semibold'>{t("symbol")} : </strong> {kundaliData?.symbol}</p>



            <div className="w-full text-black space-y-3 my-3 p-2">
              <p><strong className='font-semibold'>{t("goodQuallities")} : </strong> {kundaliData?.good_qualities}</p>
            </div>

            <div className="w-full text-black space-y-3 my-3 p-2">
              <p><strong className='font-semibold'>{t("badQuallities")} : </strong> {kundaliData?.bad_qualities}</p>
            </div>

            <div className="w-full text-black space-y-3 p-2 my-3 ">
              <p>
                <strong className='font-semibold'>{t("general")} : </strong>
                <br />
                {kundaliData?.general_prediction}
              </p>
            </div>
            <div className="w-full text-black space-y-3 my-3 p-2 ">
              <p>
                <strong className='font-semibold'>{t("personalised")} : </strong>
                <br />
                {kundaliData?.personalised_prediction}
              </p>

            </div>
          </div>

        </div>
      )
      }

      
    </div>
  )
}

export default Paramparik