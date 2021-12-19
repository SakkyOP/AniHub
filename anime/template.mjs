export default async function Anime(slug) {
    const data = await fetch('/anime/data.json').then(res => res.json())
    let found = false
    let anime_name, anime_rating, anime_lang, anime_type, anime_episodes, anime_duration, anime_image, anime_cover, anime_desc, japanese, synonym, aired, premier, _status, genres, studio, producers, seasons;
    for (const anime of data) {
        if (anime.anime_slug === slug) {
            console.log('Anime Found')
            anime_name = anime.anime_name 
            anime_rating = anime.anime_rating
            anime_lang = anime.anime_lang
            anime_type = anime.anime_type
            anime_episodes = anime.anime_episodes
            anime_duration = anime.duration
            anime_image = anime.anime_image
            anime_cover = anime.anime_cover
            anime_desc = anime.overview
            japanese = anime.japanese
            synonym = anime.synonym
            aired = anime.aired
            premier = anime.premier
            _status = anime.status
            genres = anime.genres
            studio = anime.studio
            producers = anime.producers
            seasons = anime.seasons
            found = true
            break
        }  
    }
    if (!found) {
        console.error('Anime not found!')
        return false
    }
    // const anime_name = 'One Piece'
    // const anime_rating = 'PG-13'
    // const anime_lang = 'SUB'
    // const anime_type = 'TV'
    // const anime_episodes = 'Episode 420'
    // const anime_duration = '69m'
    // const anime_image = 'https://coolthemestores.com/wp-content/uploads/2021/02/one-piece-featured.jpg'
    // const anime_cover = 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
    // const anime_desc = `Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.`
    // const japanese = 'One Piece'
    // const synonym = 'OP'
    // const aired = 'October 20, 1999 to ?'
    // const premier = 'Fall 1999'
    // const _status = 'Currently Airing'
    // const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Shounen', 'Super Power']
    // const studio = 'Toei Animation'
    // const producers = 'Fuji TV, TAP, Shueisha, Toei Animation, Funimation, 4Kids Entertainment'
    // const seasons = ['Season 1', 'Season 2']

    $('.anime-info').css('background-image', `url('${anime_image}')`)

    $('.anime-info-content > .anime-name').text(anime_name)
    $('.anime-info-content .anime-nav').text(anime_name)
    let lang_html;
    if (anime_lang.length === 1) {
        lang_html = `<span class="lang-span">${anime_lang[0]}</span>`
    } else {
        lang_html = `<span class="lang-span">${anime_lang[0]}</span><span class="lang-span">${anime_lang[1]}</span>`
    }
    $('.anime-rating').html(`<span class="rating-span">${anime_rating}</span>${lang_html}`)
    $('.anime-type').text(anime_type)
    $('.anime-episodes').text(anime_episodes)
    $('.anime-duration').text(anime_duration)

    $('.anime-img').css('background-image', `url('${anime_cover}')`)

    if (anime_desc.length <= 265) {
        $('.desc').text(anime_desc)
    } else {
        $('.desc').text(anime_desc.substring(0, 265) + '...')
        $('.toggle').get().innerText = '+ More'
    }
    $('.toggle').on('click', () => {
        if ($('.toggle').text() === '- Less') {
            $('.desc').text(anime_desc.substring(0, 265) + '...')
            $('.toggle').text('+ More')
        } else {
            $('.desc').text(anime_desc)
            $('.toggle').text('- Less')
        }
    })

    $('.japanese > p').text(japanese)
    $('.synonym > p').text(synonym)
    $('.aired > p').text(aired)
    $('.premier > p').text(premier)
    $('.duration > p').text(anime_duration)
    $('.status > p').text(_status)
    $('.studio > p').text(studio)
    $('.producers > p').text(producers)

    $('.genre > p').html(genres.map(genre => `<span>${genre}</span>`).join(' '))

    if (seasons.length) {
        $('.more-seasons').css('padding-left', '3rem').append($('<h2>', {innerText: "More Seasons", style: "margin: 2rem 0"}))
        $('.more-seasons').append(...seasons.map(season => $('<span>', {innerText: season[0]}).on('click', () => { 
            try {
                window.top.location.href = `/anime/${season[1]}`
            } catch (err) {}
        })))
    }
}
