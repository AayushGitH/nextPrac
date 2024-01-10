export default function ProfileLayout({children}) {
    return (
        <div>
        <h2>Profile header</h2>
        {children}
        <h2>Profile footer</h2>
        </div>
    )
}