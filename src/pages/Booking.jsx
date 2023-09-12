import "../../src/App.css"

export default function Booking() {
  return (
    <div className='contactForm'>
      <h1>Booking</h1>
      <form >
        <input type="text" name='name' placeholder='Name' />
        <input type="email" name='email' placeholder='Email' />
        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
        <button>Send Message <i className="fa-regular fa-message"></i></button>
      </form>
    </div>
  )
}