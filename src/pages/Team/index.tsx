import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettings, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
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
    access?: string
    renderCell?: ({ row: { access } }: { [key: string]: { access: string; }; }) => void
}


const Team: React.FC = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns: GridColDef<Icolumns>[] = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
        {field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align:'left'},
        {field: 'phone', headerName:'Phone Number', flex: 1},
        {field: 'email', headerName:'Email', flex: 1},
        {field: 'access', headerName:'Access Level', flex: 1, renderCell: ({row: {access}}) => {
            return (
                <Box
                    width='60%'
                    m='10px 0'
                    p='5px'
                    display='flex'
                    justifyContent='center'
                    borderRadius='4px'
                    sx={{ backgroundColor: (access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700])}}
                >
                    {access === 'admin' && <AdminPanelSettings /> }
                    {access === 'manager' && <SecurityOutlined /> } 
                    {access === 'user' && <LockOpenOutlined /> }
                    <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
                        {access}
                    </Typography>
                </Box>
            )
        }}

    ]

    return (
        <Box m='0 20px 0 20px'>
            <Box display='flex' flexDirection='column' justifyContent='space-between'>
                <Header title="Team" subTitle="Welcome to your Team" />
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
                    }

                }}
                >
                    <DataGrid rows={mockDataTeam} columns={columns} />
                </Box>
            </Box>
        </Box>
    )
}
 
export default Team;