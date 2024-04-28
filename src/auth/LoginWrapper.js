import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLoadingWrapper from '../components/PageLoadingWrapper'
import NotFound from '../components/NotFound'
import { useContext } from 'react'
import { AuthContext } from '../App'
import NavBar from '../public-routes/NavBar'
import Redirect from '../components/Redirect'

const SignUp = lazy(() => import('../public-routes/SignUp'))

const LoginWrapper = ({ children }) => {
    const { isLoogedIn } = useContext(AuthContext)
    if (!isLoogedIn) {
        return (
            <BrowserRouter>
            <NavBar />
                <Routes>
                    {/* <Route 
                    path='/profile' element={Redirect}
                    

                    /> */}
                    <Route
                        path='/'
                        element={
                            <PageLoadingWrapper >
                                <SignUp />
                            </PageLoadingWrapper>
                        } />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        )
    }
    return <>{children}</>
}

export default LoginWrapper
