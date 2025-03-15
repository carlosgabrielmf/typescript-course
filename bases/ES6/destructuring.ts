(()=>{ 

    type Avengers = {
        ironman: string;
        nick_fury: string;
        thor: string;
        activo: boolean;
        poder: number;
    };

        const AvengersActors = {
        ironman: "Robert Downey Jr.",
        nick_fury: "Samuel L. Jackson",
        thor: "Chris Hemsworth",
        activo: true,
        poder: 1500
    }   

    // const printAvenger = (AvengersActors: Avengers) => {
    //     console.log(AvengersActors.ironman);
    // }

    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto.activo);
    }
    printAvenger(AvengersActors);


    const arrAvengers: [string, boolean, number] = ["Capitan America", true, 1500];
    const [avenger, experimento, maximoPoder] = arrAvengers;
    console.log(avenger, experimento, maximoPoder);
    // const {poder, ironman} = AvengersActors;
    // console.log(ironman.toUpperCase(), poder.toFixed(2));

    })()