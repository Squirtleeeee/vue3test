export {}

let testNum : number = 114514
console.log(testNum)

let name : string = 'inkka'
console.log(name)


interface Info {
  title: string;
  lyrics: string;
}

interface Uta {
  id: number;
  producer: string;
  info: Info;
}

const uta: Uta = {
  id: 1,
  producer: "harumakigohan",
  info: {
    title: "メルティランドナイトメア",
    lyrics: "Welcome to the MeltyLand",
  },
}

console.log(uta)

const imgTest = document.createElement('img') as HTMLImageElement
console.log(imgTest.src)