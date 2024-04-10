import { useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material' 
import { Link } from 'react-router-dom'
import { tokens } from "../../theme"
import user from '../../assets/user.png'
import { HomeOutlined ,
    PeopleOutlined, 
    ContactsOutlined, 
    ReceiptOutlined, 
    PersonOutlined ,
    CalendarMonth ,
    HelpOutlined,
    BarChartOutlined ,
    PieChartOutlined,
    TimelineOutlined, 
    MapOutlined, MenuOutlined } from '@mui/icons-material'
import 'react-pro-sidebar/dist/css/styles.css'
    

interface Iitem {
    title: string
    to: string
    icon: React.ReactNode
    selected: string
    setSelected: (title:string) => void
}

interface IrouteTo {
    '': string
    team: string
    contacts: string
    invoices: string
    form: string
    calendar: string
    faq: string
    bar: string
    pie: string
    line: string
    geography: string
}


const routeTo: IrouteTo = {
    '': 'Dashboard',
    'team': 'Manage Team',
    'contacts': 'Contacts Information',
    'invoices': 'Invoices Balances',
    'form': 'Profile Form',
    'calendar': 'Calendar',
    'faq': 'FAQ Page',
    'bar': 'Bar Chart',
    'pie': 'Pie Chart',
    'line': 'Line Chart',
    'geography': 'Geography Chart'
}


const Item: React.FC<Iitem> = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <MenuItem 
            active={selected === title}
            style={{ color: colors.grey[100]}}
            onClick={() => setSelected(title)}  
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={`admin-page${to}`} />
        </MenuItem>
    )
}

const Sidebar: React.FC = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const locationNow:string = window.location.href.split('/')[4]
    const [selected, setSelected] = useState<string>((routeTo as any)[locationNow])

    return (
        <Box
         sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400]} !important`
            },
            '& .pro-icon-wrapper': {
                background: 'transparent !important'
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px !important'
            },
            '& .pro-inner-item:hover': {
                color: '#868dfb !important'
            },
            '& .pro-menu-item.active': {
                color: '#6870fa !important'
            }
         }}
        >


            <ProSidebar collapsed={isCollapsed} >
                <Menu iconShape="square">

                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100]}}
                    > 

                    {!isCollapsed && (
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            ml='15px'
                        >
                             <Typography variant="h3" color={colors.grey[100]}>
                                ADMINIS
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlined />
                            </IconButton>
                        </Box>
                    )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <img
                                    alt='profile-user'
                                    width='100px'
                                    height='100px'
                                    src={user}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                                >
                                Samuel
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                     <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Data
                        </Typography>
                        <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactsOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Pages
                        </Typography>
                        <Item
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarMonth />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Charts
                        </Typography>
                        <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>

        </Box>
    )
}


export default Sidebar