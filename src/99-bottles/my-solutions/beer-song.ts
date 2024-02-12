export function beerSong(verses: number): string {
  let song = ''
  for (let i = verses; i > 0; i--) {
    song += `${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${
      i > 1 ? 's' : ''
    } of beer.\n`
    song += `Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${
      i - 1 === 1 ? '' : 's'
    } of beer on the wall.\n`
  }
  return song
}
