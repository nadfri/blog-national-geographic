onscroll = () => {
    const page = document.documentElement; //element HTML
    let totalHeight = page.scrollHeight; //Height Total of page
    let visibleHeight = page.clientHeight; //Height visible
    let scrolling = page.scrollTop; //size of scroll
    let max = totalHeight - visibleHeight;
    progressBar.style.width = Math.floor(scrolling / max * 100) + "%"; //width in %

    if (progressBar.style.width == "100%")
        progressBar.style.backgroundColor = "yellow";
    else progressBar.style.backgroundColor = "rgb(192, 127, 6)";
}


