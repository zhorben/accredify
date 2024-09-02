import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table'
import { NavLink } from 'react-router-dom'
import { useDocuments } from '../../data/useDocuments'
import { Document } from '../../types'
import { theme } from '../../utils/tailwindConfig'
import { Icon } from '../Icon/Icon'
import { PopoverButton } from '../PopoverButton/PopoverButton'

interface DocumentListProps {
  title: string
  className?: string
  tableProps?: {
    className?: string
  }
}

export const DocumentList: React.FC<DocumentListProps> = ({
  title,
  className = '',
  tableProps = {
    className: '',
  },
}) => {
  const { data: documents, isLoading, error } = useDocuments()

  const sortedDocuments = useMemo(() => {
    return [...(documents || [])].sort((a, b) => {
      return (
        new Date(b.received_on || 0).getTime() -
        new Date(a.received_on || 0).getTime()
      )
    })
  }, [documents])

  const columns = useMemo<MRT_ColumnDef<Document>[]>(
    () => [
      {
        accessorKey: 'document_name',
        header: 'Document Name',
        mantineTableBodyCellProps: {
          style: {
            width: '100%',
            flex: '1 1 auto',
          },
        },
        mantineTableHeadCellProps: {
          style: {
            width: '100%',
            flex: '1 1 auto',
          },
        },
        Cell: ({ cell }) => {
          return (
            <div className="flex h6 text-text-heading">
              <Icon
                module="common"
                name="document"
                color={theme.colors.secondary}
                className="mr-[1rem]"
              />
              {cell.getValue<string>()}
            </div>
          )
        },
      },
      {
        accessorKey: 'received_on',
        header: 'Received On',
        minSize: 140,
        maxSize: 140,
        size: 140,
        Cell: ({ cell }) => {
          const value = cell.getValue<string | null>()
          return value ? format(parseISO(value), 'dd MMM yyyy') : '-'
        },
      },
    ],
    [],
  )

  const table = useMantineReactTable({
    layoutMode: 'grid-no-grow',
    columns,
    data: sortedDocuments || [],
    enableStickyHeader: true,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableRowActions: true,
    positionActionsColumn: 'last',
    mantineTableContainerProps: { style: { maxHeight: '23.75rem' } },
    mantineTableProps: {
      withColumnBorders: false,
      withRowBorders: false,
      withTableBorder: false,
      maxLength: 5,
    },
    mantinePaperProps: {
      withBorder: false,
      shadow: undefined,
    },
    mantineTableHeadProps: {
      className: 'bg-black opacity-1',
    },
    mantineTableHeadCellProps: {
      className: 'text-text-primary bg-white',
    },
    mantineTableBodyCellProps: {
      className: 'px-[1rem] py-[1.25rem] border-b border-border',
    },
    displayColumnDefOptions: {
      'mrt-row-actions': {
        minSize: 56,
        maxSize: 56,
        size: 56,
        header: '',
        mantineTableBodyCellProps: {
          align: 'center',
        },
      },
    },
    renderRowActionMenuItems: ({ row }) => (
      <>
        <PopoverButton onClick={() => console.log('View', row.original.id)}>
          View
        </PopoverButton>
        <PopoverButton onClick={() => console.log('Download', row.original.id)}>
          Download
        </PopoverButton>
        <PopoverButton onClick={() => console.log('Share', row.original.id)}>
          Share
        </PopoverButton>
      </>
    ),
  })

  if (isLoading) return 'Loading...'
  if (error) return <div>Failed to load Career Goal</div>
  if (!documents) return <div>Not Found</div>

  return (
    <div
      className={`flex flex-1 flex-col ${className}`}
      data-testid="document-list"
    >
      <div className="flex justify-between items-center mb-[1rem]">
        <h4 className="h4">{title}</h4>
        <NavLink className="link" to="/documents">
          View All Documents
        </NavLink>
      </div>
      <div
        className={`border border-border rounded-[0.25rem] py-[2rem] px-[1.5rem] ${tableProps.className}`}
      >
        <MantineReactTable table={table} />
      </div>
    </div>
  )
}
