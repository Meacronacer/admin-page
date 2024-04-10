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
                        <Route path='/' element={ <Dashboard />} />
                        <Route path='/team' element={ <Team />} />
                        <Route path='/contacts' element={ <Contacts />} />
                        <Route path='/invoices' element={ <Invoices />} />
                        <Route path='/form' element={ <ProfileForm />} />
                        <Route path='/bar' element={ <BarChart />} />
                        <Route path='/pie' element={ <PieChart />} />
                        <Route path='/line' element={ <LineChart />} />
                        <Route path='/faq' element={ <Faq />} />
                        <Route path='/geography' element={ <GeographyChart />} />
                        <Route path='/calendar' element={ <Calendar />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    )
}


export default App