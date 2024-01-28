const Contact = () => {
    return (
        <section className="items-center justify-center mx-auto max-w-2xl">
            
            <h3 className="text-secondcolor text-center font-black text-6xl italic mb-8 w-full">Let's work together!</h3>
            <form action="https://formsubmit.co/marcelogabriel037@gmail.com" method="POST">
                <div className="flex flex-col mb-5">
                    <label for="email" className="mb-2">Email</label>
                    <input type="email" name="email" id="email" placeholder="email@servidor.com" className="text-black p-2.5 rounded-lg"/>
                </div>
                <div className="flex flex-col mb-5">
                    <label for="text" className="mb-2">Descripcion</label>
                    <textarea type="text" name="text" id="text" rows='4' placeholder="I need a landing page for ..." className="text-black p-2.5 rounded-lg"/>
                </div>
                <div className="mb-5">
                    <button type="submit" className="font-medium rounded-lg text-black w-full bg-grey px-5 py-2.5 text-center hover:bg-firstcolor hover:text-white">Send</button>
                </div>
            </form>
        </section>
    );
}
 
export default Contact;