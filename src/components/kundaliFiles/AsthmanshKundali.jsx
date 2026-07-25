import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader'
import svgCache from '../../utils/svgCache'

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

const AsthmanshKundali = ({ userData }) => {
  const [asthmansh, setAsthmansh] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (!userData) return
    let cancelled = false
    const { formattedDate, time, latitude, longitude } = userData
    const key = `${formattedDate}_${time}_${latitude}_${longitude}_d8`
    if (svgCache.has(key)) {
      setAsthmansh(svgCache.get(key))
      return
    }

    const fetchChart = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `/.netlify/functions/proxy/api/chart_image/d8?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&style=north&lang=hi&colored_planets=true`)
        if (!res.ok) {
          console.warn('Asthmansh chart fetch failed:', res.status, res.statusText)
        } else {
          const svg = await res.text()
          const clean = normalizeSvg(svg)
          if (!cancelled) {
            setAsthmansh(clean)
            svgCache.set(key, clean)
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchChart()
    return () => { cancelled = true }
  }, [userData])

  if (loading) return (
    <div className='min-h-[50vh] w-full flex justify-center items-center mt-10 rounded-xl bg-[#0f172a] p-6'>
      <Loader />
    </div>
  )

  return (
    <div>
      {asthmansh && (
        <div className="mt-10 bg-white lp-6 rounded-xl flex flex-col justify-start items-start">
          <h2 className="w-full text-blue-600 text-2xl font-bold mb-4 text-center mt-5">
            अष्टमांश कुंडली
          </h2>
          <div className='chart-inner w-full rounded-lg bg-white pr-10 lg:p-4 lg:flex justify-center items-center'>
            <div className="chart-svg-wrapper w-full lg:w-[60%] lg:m-auto" dangerouslySetInnerHTML={{ __html: asthmansh }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default AsthmanshKundali;