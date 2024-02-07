//import './components/inbox/Inbox'
const Inbox = (props) => {
    const {account, messages} = props;
   
    
    return (
        <>
        <div className="ucet">{account}</div>
        
       <div className="zpravy">
        {messages >= 1 ? (
        <div className="unread">Nepřečtených zpráv: {messages}</div>
        ) : (
        <div className="no-unread">Žádné nepřečtené zprávy</div>
        )
        }
        </div>
        
        </>
    )
}

export default Inbox