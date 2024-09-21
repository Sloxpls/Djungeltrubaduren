// Select the audio element and source
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Get all the playlist items (list of songs)
const playlist = document.querySelectorAll('#playlist li');
let currentSongIndex = 0; // Start with the first song

// Function to load and play the selected song
function loadSong(index) {
    currentSongIndex = index;  // Update the current song index
    const selectedSong = playlist[currentSongIndex].getAttribute('data-src');  // Get the song from the data attribute
    audioSource.src = selectedSong;  // Set the new song source
    audioPlayer.load();  // Reload the audio player
    audioPlayer.play();  // Play the new song
    highlightCurrentSong();  // Highlight the current song
}

// Highlight the currently playing song in the playlist
function highlightCurrentSong() {
    playlist.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';  // Highlight the current song
        } else {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';  // Reset others
        }
    });
}

// Attach event listeners to each playlist item for click functionality
playlist.forEach((item, index) => {
    item.addEventListener('click', () => {
        loadSong(index);  // Load and play the song when clicked
    });
});

// When the current song ends, move to the next song and loop the playlist
audioPlayer.addEventListener('ended', () => {
    currentSongIndex++;  // Go to the next song
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;  // Loop back to the first song if at the end of the playlist
    }
    loadSong(currentSongIndex);  // Play the next song
});

// Start by playing the first song automatically
loadSong(currentSongIndex);
