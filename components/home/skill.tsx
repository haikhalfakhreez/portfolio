import { useState, useCallback } from 'react'
import Image from 'next/image'
import layoutStyles from '../../styles/layout.module.scss'
import { AppProvider, Card, DataTable } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'

export default function Skill() {
  const skillItems = {
    Frontend: [
      {
        name: 'Vue',
        logoPath: '/assets/vue.svg',
      },
      {
        name: 'Nuxt JS',
        logoPath: '/assets/nuxtjs.svg',
      },
      {
        name: 'React',
        logoPath: '/assets/react.svg',
      },
      {
        name: 'Next JS',
        logoPath: '/assets/nextjs.svg',
      },
    ],
    Backend: [
      {
        name: 'Laravel',
        logoPath: '/assets/laravel.svg',
      },
    ],
    Libraries: [
      {
        name: 'jQuery',
        logoPath: '/assets/jquery.svg',
      },
    ],
    CSS: [
      {
        name: 'Tailwind',
        logoPath: '/assets/tailwindcss.svg',
      },
      {
        name: 'SCSS',
        logoPath: '/assets/sass.svg',
      },
      {
        name: 'Bootstrap',
        logoPath: '/assets/bootstrap.svg',
      },
      {
        name: 'Material UI (MUI)',
        logoPath: '/assets/mui.svg',
      },
    ],
    Design: [
      {
        name: 'Figma',
        logoPath: '/assets/figma.svg',
      },
      {
        name: 'Adobe XD',
        logoPath: '/assets/xd.svg',
      },
    ],
    Tool: [
      {
        name: 'Git',
        logoPath: '/assets/git.svg',
      },
      {
        name: 'GitHub',
        logoPath: '/assets/github.svg',
      },
      {
        name: 'Webpack / Mix',
        logoPath: '/assets/webpack.svg',
      },
      {
        name: 'ClickUp',
        logoPath: '/assets/clickup.svg',
      },
    ],
    Language: [
      {
        name: 'TypeScript',
        logoPath: '/assets/typescript.svg',
      },
      {
        name: 'JavaScript',
        logoPath: '/assets/javascript.svg',
      },
      {
        name: 'PHP',
        logoPath: '/assets/php.svg',
      },
    ],
    API: [
      {
        name: 'Web API',
        logoPath: '/assets/webapi.svg',
      },
      {
        name: 'Google Map API',
        logoPath: '/assets/googlemap.svg',
      },
    ],
  }

  interface SkillItem {
    name: string
    logoPath: string
  }

  function createInitialRow(rawData: Object) {
    let initialRow: Array<any> = []

    for (const [key, value] of Object.entries(rawData)) {
      value.forEach((item: SkillItem) => {
        initialRow.push([
          <div className="flex items-center gap-x-5">
            <Image src={item.logoPath} height={30} width={30} alt={item.name} layout="fixed" />
            <span className="text-base font-medium">{item.name}</span>
          </div>,
          key,
        ])
      })
    }

    return initialRow
  }

  const [sortedRows, setSortedRows] = useState<string[][] | null>(null)
  const rows = sortedRows ? sortedRows : createInitialRow(skillItems)

  const handleSort = useCallback((index, direction) => setSortedRows(sortRows(rows, index, direction)), [rows])

  return (
    <div>
      <section className={`${layoutStyles.container} pb-8`}>
        <div className="text-center">
          <h2 className="section-title pt-20 pb-14" id="skill">
            Skill
          </h2>

          <div>
            <AppProvider i18n={enTranslations}>
              <Card>
                <DataTable
                  columnContentTypes={['text', 'numeric']}
                  headings={[<div className="font-bold">Technology</div>, <div className="font-bold">Category</div>]}
                  rows={rows}
                  sortable={[true, true]}
                  onSort={handleSort}
                  verticalAlign="middle"
                />
              </Card>
            </AppProvider>
          </div>
        </div>

        {/* To make Polaris table scrollable and its header sticky */}
        <style global jsx>{`
          .Polaris-Card {
            overflow: hidden;
            border-radius: 8px;
          }

          .Polaris-DataTable__Table {
            position: relative;
            border-collapse: separate;
          }

          .Polaris-DataTable__ScrollContainer {
            overflow-y: auto;
            height: calc((62px * 8) + 7px + 54px); /* (row-height * amount) + (amount - 1) + header-height */
          }

          .Polaris-DataTable__Table thead,
          .Polaris-DataTable__Table thead tr,
          .Polaris-DataTable__Table thead tr th {
            position: sticky;
            top: 0;
            background: #fff;
            z-index: 1;
          }
        `}</style>
      </section>
    </div>
  )
}

// Sort rows by ascending or descending order (alphabetically)
// Row 1st will return React.element. Target <span> children to get the actual text
function sortRows(rows: any[][] | null, index: number, direction: string): string[][] | null {
  if (!rows) return null

  if (index === 0) {
    return direction === 'ascending'
      ? [...rows].sort((rowA, rowB) =>
          rowA[index].props.children[1].props.children.toLowerCase() ===
          rowB[index].props.children[1].props.children.toLowerCase()
            ? 0
            : rowA[index].props.children[1].props.children.toLowerCase() <
              rowB[index].props.children[1].props.children.toLowerCase()
            ? -1
            : 1
        )
      : [...rows].sort((rowA, rowB) =>
          rowA[index].props.children[1].props.children.toLowerCase() ===
          rowB[index].props.children[1].props.children.toLowerCase()
            ? 0
            : rowA[index].props.children[1].props.children.toLowerCase() <
              rowB[index].props.children[1].props.children.toLowerCase()
            ? 1
            : -1
        )
  }

  return direction === 'ascending'
    ? [...rows].sort((rowA, rowB) => (rowA[index] === rowB[index] ? 0 : rowA[index] < rowB[index] ? -1 : 1))
    : [...rows].sort((rowA, rowB) => (rowA[index] === rowB[index] ? 0 : rowA[index] < rowB[index] ? 1 : -1))
}
