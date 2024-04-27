import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLoadingWrapper from '../components/PageLoadingWrapper'
import NotFound from '../components/NotFound'
import { useContext } from 'react'
import { AuthContext } from '../App'

const Login = lazy(() => import('../public-routes/Login'))
const SignUp = lazy(() => import('../public-routes/SignUp'))

const LoginWrapper = ({ children }) => {
    const {isLoogedIn} = useContext(AuthContext)
    if (!isLoogedIn) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/login'
                        element={
                            <PageLoadingWrapper >
                                <Login />
                            </PageLoadingWrapper>} />
                    <Route
                        path='/signup'
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
