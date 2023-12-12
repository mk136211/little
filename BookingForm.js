import {useState} from 'react'

const BookingForm = (props) => {
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guest,setGuest]=useState("");
    const [occasion,setOccassion]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange=(e)=>{
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">Choose Date</label>

                        <input id="book-date" value={date} onChange={(e)=> handleChange(e.target.value)} type="date" required />
                    </div>
                    <div>
                    <label htmlFor="book-Time">Choose Time</label>
                        <select id="book-Time" value={time} onChange={((e)=>setTime (e.target.value))}> 
                        <option value="">select a Time</option>{
                            props.availableTime.availableTimes.map(availableTimes=>{return(
                        <option key={availableTimes}>{availablesTimes}</option>)})
                            }
                        </select>
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="book-guests">Number of Guest :</label>
                        <input id="book-guest" min ="1" value={guest} onChange={(e)=>setGuest(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="book-occasion">occasion</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={e=>setOccassion(e.target.value)}>
                        <option>BirthDay</option>
                        <option>Anniversary</option></select>
                    </div>
                    <div className="btnReceive">
                        <input aria-label='on Click' type="submit" valu={"make a reservation"}/>
                    </div>

                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm
