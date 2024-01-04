
import { ArrowRightCircle } from '@/components/HeroIcons'
import CONFIG from '../config'
import Swipe from './Swipe'
import { siteConfig } from '@/lib/config'

/**
 * 通知横幅
 */
export function NoticeBar() {
  let notices = siteConfig('HEO_NOTICE_BAR', null, CONFIG)
  if (typeof notices === 'string') {
    notices = JSON.parse(notices)
  }
  if (!notices || notices?.length === 0) {
    return <></>
  }

  return (
        <div className="max-w-[86rem] w-full mx-auto flex h-12 mb-4 px-5 font-bold">
            <div className="animate__animated animate__fadeIn animate__fast group cursor-pointer bg-black dark:bg-[#1e1e1e] dark:text-white hover:border-indigo-600 dark:hover:border-yellow-600 border dark:border-gray-700  duration-200 hover:shadow-md transition-all rounded-xl w-full h-full flex items-center justify-between px-5">
                <span className='whitespace-nowrap'></span>
                <div className="w-full h-full hover:text-indigo-600 flex justify-center items-center">
                    <Swipe items={notices} />
                </div>
            </div>
        </div>
  )
}
