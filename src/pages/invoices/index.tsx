import { Box, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material";
import type { GridColDef } from '@mui/x-data-grid';
import Header from "../../components/header";
import React from "react";

interface Icolumns {
    field?: string
    headerName?: string
    type?: string
    flex?: number
    cellClassName?: string
    headerAlign?: string
    align?: string
    date?: string
    cost?: string
}

const Invoices: React.FC = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns: GridColDef<Icolumns>[] = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
        {field: 'phone', headerName:'Phone Number', flex: 1},
        {field: 'email', headerName:'Email', flex: 1},
        {field: 'date', headerName: 'Date', flex: 1},
        {field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => (
            <Typography sx={{mt: '15px'}} color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )}
    ]

    return (
        <Box m='0 20px 0 20px'>
            <Box display='flex' flexDirection='column' justifyContent='space-between'>
                <Header title="Invoices" subTitle="List of Invoice balances" />
                <Box
                m='20px 0 0 0'
                height='100vh'
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none'
                    },
                    '& .MuiDataGrid-cell': {
                        border: 'none'
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .css-1essi2g-MuiDataGrid-columnHeaderRow': {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                        borderBottom: 'none'
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400]
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700]
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`
                    }

                }}
                >
                    <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
                </Box>
            </Box>
        </Box>
    )
}
 
export default Invoices;