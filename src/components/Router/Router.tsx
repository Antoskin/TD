import React, {FC} from 'react';

interface IRouter {
    component: FC,
    layout: FC,
    isMain: boolean | undefined
    args: any
}

const Router: FC<IRouter> = ({component: Component, layout: Layout, isMain, ...args}) => {

    if (Layout) {
        return (
            <Layout isMain={isMain}>
                <Component {...args} />
            </Layout>
        )
    } return null
}

export default Router
