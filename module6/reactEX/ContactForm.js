import React from "react"

function ContactForm() {
    const [value, setValue] = React.useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form>
                <label> Your Name</label>
                <input type="text" value={value} onChange={handleChange} />
        </form>
    )
}

export default ContactForm;