import Dashboard from "./pages/dashboard"
import TopBar from "./pages/global/topbar"
import Sidebar from "./pages/global/sidebar"
import Team from "./pages/Team"
import Contacts from "./pages/contacts"
import Invoices from "./pages/invoices"
import ProfileForm from "./pages/profileForm"
import LineChart from "./pages/lineChart"
import Faq from "./pages/faq"
import GeographyChart from "./pages/geographyChart"
import Calendar from "./pages/calendar/calendar"
import BarChart from "./pages/barChart"
import PieChart from "./pages/pieChart"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route} from 'react-router-dom'


const App = () => {
    const [theme, colorMode] = useMode()

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <div className="app">
                <Sidebar />
                <main className="content">
                    <TopBar/>
                    <Routes>
                        <Route path='admin-page/' element={ <Dashboard />} />
                        <Route path='admin-page/team' element={ <Team />} />
                        <Route path='admin-page/contacts' element={ <Contacts />} />
                        <Route path='admin-page/invoices' element={ <Invoices />} />
                        <Route path='admin-page/form' element={ <ProfileForm />} />
                        <Route path='admin-page/bar' element={ <BarChart />} />
                        <Route path='admin-page/pie' element={ <PieChart />} />
                        <Route path='admin-page/line' element={ <LineChart />} />
                        <Route path='admin-page/faq' element={ <Faq />} />
                        <Route path='admin-page/geography' element={ <GeographyChart />} />
                        <Route path='admin-page/calendar' element={ <Calendar />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    )
}


export default App