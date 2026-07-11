import React from 'react'
import { useTranslation } from 'react-i18next'

const Account = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-gradient-to-r from-[#111727] to-[#0a1a0a] w-full text-amber-300 h-[100vh] mt-20 flex items-center justify-center text-2xl'>
      {t('accountTitle')}
    </div>
  )
}

export default Account