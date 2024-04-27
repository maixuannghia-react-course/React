function Time() {
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, 0);
    let minute = date.getMinutes().toString().padStart(2, 0);
    let second = date.getSeconds().toString().padStart(2, 0);
    return(
        <h2>
            {hour}:{minute}:{second} PM
        </h2>
    );
}

export default Time;