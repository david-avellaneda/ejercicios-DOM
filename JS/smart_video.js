export default function smartVideo() {
    const $video = document.querySelectorAll('.sv'), // sv = smart video
    // querySelectorAll por si llegan a haber más videos, se puede quitar ese All y los forEach ya que hay un solo video
        callback = entries => {
            entries.forEach(entry => { 
                entry.isIntersecting === true 
                    ? entry.target.play() 
                    : entry.target.pause();
                window.addEventListener('visibilitychange', () => document.visibilityState === 'visible' 
                    ? entry.target.play() 
                    : entry.target.pause()
                );
            });
        }, 
        observeVideo = new IntersectionObserver(callback, {threshold: 0.85});
    document.querySelector('.sv').addEventListener('mousedown', () => {
        document.querySelector('.sv').addEventListener('contextmenu', e => e.preventDefault());
    });
    $video.forEach(el => observeVideo.observe(el));
};