const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    // Inspecting JS code
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string', '💩');

    // Styled
    // console.log('%c I am gorgeous text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

    // warning!
    console.warn('Oh nooooo');

    // Error :|
    console.error('Holy shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year, did you know?');

    // Testing
    console.assert(1 === 2, 'That is wrong'); //it works just if the statement is wrong

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong too!');

    // clearing
    console.clear(); //frusrating for other dev,

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
    function capitalize(string) {
      return string.charAt(0).toUpperCase()+ string.slice(1);
    }
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(capitalize((`${dog.name} is ${dog.age * 7} years old`)));
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('cami');
    console.count('cami');
    console.count('ricky');
    console.count('cami');
    console.count('cami');
    console.count('ricky');
    console.count('cami');
    console.count('cami');

    console.clear();

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/revdep')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(dogs);













