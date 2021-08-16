import Image from 'next/image'
import Link from 'next/link'

import { Svg as AcademicCapIcon } from '@/assets/icons/academic-cap.svg'
import { Svg as DefaultAvatar } from '@/assets/icons/user.svg'
import { getFullName } from '@/cms/utils/getFullName'
import { Icon } from '@/common/Icon'
import { useI18n } from '@/i18n/useI18n'
import { routes } from '@/navigation/routes.config'
import type { CourseListItem } from '@/views/post/getCourseListData'

const MAX_AUTHORS = 3

export interface CoursePreviewCardProps {
  course: CourseListItem
}

/**
 * Course preview.
 */
export function CoursePreviewCard(props: CoursePreviewCardProps): JSX.Element {
  const { course } = props
  const { id, title, editors: authors, abstract } = course

  const { t } = useI18n()

  const href = routes.course({ id })

  return (
    <article className="flex flex-col overflow-hidden border shadow-sm rounded-xl hover:shadow-md border-neutral-150">
      <div className="flex flex-col px-10 py-10 space-y-5">
        <h2 className="text-2xl font-semibold">
          <Link href={href}>
            <a className="block transition rounded hover:text-primary-600 focus:outline-none focus-visible:ring focus-visible:ring-primary-600">
              <span className="inline-flex mr-2 text-primary-600">
                <Icon
                  icon={AcademicCapIcon}
                  className="flex-shrink-0 w-5 h-5"
                />
              </span>
              <span>{title}</span>
            </a>
          </Link>
        </h2>
        <div className="leading-7 text-neutral-500">{abstract}</div>
      </div>
      <footer className="flex items-center justify-between h-20 px-10 py-5 bg-neutral-100">
        <dl>
          {Array.isArray(authors) && authors.length > 0 ? (
            <div>
              <dt className="sr-only">{t('common.authors')}</dt>
              <dd>
                <ul className="flex items-center space-x-1">
                  {authors.slice(0, MAX_AUTHORS).map((author) => {
                    return (
                      <li key={author.id} className="flex">
                        <span className="sr-only">{getFullName(author)}</span>
                        {author.avatar !== undefined ? (
                          <Image
                            src={author.avatar}
                            alt=""
                            className="w-8 h-8 rounded-full"
                            width={32}
                            height={32}
                            objectFit="cover"
                            layout="fixed"
                          />
                        ) : (
                          <Icon
                            icon={DefaultAvatar}
                            className="object-cover w-8 h-8 rounded-full text-primary-600"
                          />
                        )}
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>
        <Link href={href}>
          <a tabIndex={-1} className="transition hover:text-primary-600">
            {t('common.readMore')} &rarr;
          </a>
        </Link>
      </footer>
    </article>
  )
}
