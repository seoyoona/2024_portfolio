// 사이트 레이아웃

const sections = document.querySelectorAll('.section');
const contents = document.querySelectorAll('.content');

const colors = ['#000', '#000', '#555', '#777'];

function changeBackgroundColor() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + windowHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            section.style.backgroundColor = colors[index];
            contents[index].classList.add('visible');
        } else {
            contents[index].classList.remove('visible');
        }
    });

    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

        sections.forEach((section, index) => {
      if (isElementInViewport(section) || section.getBoundingClientRect().top <= 0) {
        section.style.backgroundColor = colors[index];
        contents[index].classList.add('visible');
      } else {
        contents[index].classList.remove('visible');
      }
    });

}

window.addEventListener('scroll', changeBackgroundColor);
changeBackgroundColor(); // 초기 로드 시 실행


  //spline
  document.addEventListener('DOMContentLoaded', function() {
    const splineViewer = document.getElementById('spline-viewer');

    function adjustSplineViewer() {
        if (splineViewer.application) {
            // 카메라 설정 조정
            const camera = splineViewer.application.camera;
            if (camera) {
                // 화면 비율에 따라 카메라 줌 조정
                const aspectRatio = window.innerWidth / window.innerHeight;
                if (aspectRatio < 1) {
                    // 모바일 또는 세로 화면
                    camera.zoom = 0.7;  // 줌 아웃
                } else {
                    // 데스크톱 또는 가로 화면
                    camera.zoom = 1;  // 기본 줌
                }
                camera.updateProjectionMatrix();
            }

            // 렌더러 크기 조정
            const renderer = splineViewer.application.renderer;
            if (renderer) {
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            // 뷰어 크기 조정
            splineViewer.application.updateBounds();
        }
    }
    // 윈도우 크기 변경 시 조정
    window.addEventListener('resize', adjustSplineViewer);

});

//skill belt
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Git'];
const conveyor = document.querySelector('.conveyor-belt');

skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = 'skill-icon';
  div.textContent = skill;
  conveyor.appendChild(div);
});
