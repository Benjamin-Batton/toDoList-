import React from "react";

export const withSuspens = (WrappedComponent) => {
    return (props) => {
        return <React.Suspense fallback={<div>loading...</div>} >
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}
