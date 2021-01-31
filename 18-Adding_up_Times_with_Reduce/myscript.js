const timeNodes = Array.from(document.querySelectorAll('[data-time]')); // we need to transform it in an array from a node object

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })

  // reduce return whatever you want
