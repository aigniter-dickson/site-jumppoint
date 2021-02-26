import { Head } from 'blitz'

type LayoutProps = Required<
  import('react').PropsWithChildren<{
    title?: string
  }>
>

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children || {}}</main>
    </>
  )
}

export default Layout
