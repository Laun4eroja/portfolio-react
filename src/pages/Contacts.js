const Contacts = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="title-1 title-2">Contacts</h1>
                <ul className="content__list">
                    <li className="content__list-item">
                        <h2 className="content__list-title">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content__list-item">
                        <h2 className="content__list-title">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79961009641">+7 (996) 100-96-41</a></p>
                    </li>
                    <li className="content__list-item">
                        <h2 className="content__list-title">Email</h2>
                        <p><a href="mailto:biktimirov93@mail.ru">Biktimirov93@mail.ru</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;