import { Spin } from 'antd'
import React, { Suspense } from 'react'

const PageLoadingWrapper = ({ children }) => {
    return (
        <Suspense
            fallback={
                <div style={styles.loadingContainer}>
                    <Spin size='large' />
                    <b>Loading ...</b>
                </div>
            }
        >
            {children}
        </Suspense>
    )
}

export default PageLoadingWrapper


const styles = {
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        height: "300px",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px"
    }
}