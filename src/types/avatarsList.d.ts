import type { ListSubheaderTypeMap } from "@mui/material"

export type ListDataProps = {
    avatar: string
    name: string
    subtitle: string
}

export interface AvatarsListProps {
    listData: ListDataProps[]
}