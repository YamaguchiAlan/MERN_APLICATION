export default  function () {
    let resizeTimeout;

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(function(){
            checkWindowSize()

            const signupForm = document.getElementById("signup-form")
            const header = document.getElementById("header")

            if(header && signupForm){
                signupForm.style.height=`${window.innerHeight - header.offsetHeight}px`
            }
        }, 200);
    })
}

export const checkWindowSize = () => {
    const body = document.getElementById("back-body")
    const footer = document.getElementById("footer")
    if(body && footer){
        const header = document.getElementById("header")
        const windowSize = window.innerHeight

        let bodySize = windowSize - footer.offsetHeight - header.offsetHeight
        body.style.minHeight=`${bodySize}px`
    }
}