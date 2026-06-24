document.addEventListener('DOMContentLoaded', function() {
        const header = document.getElementById('header');
        const headerTitle = document.querySelector('.header__site-name');
        const callBtn = document.getElementById('callButton');
        const checkbox = document.getElementById('agreeCheckbox');
        const checkboxLabel = document.getElementById('checkboxLabel');
        const modal = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('modalClose');
        const form = document.getElementById('callForm');
        const formWrapper = document.getElementById('formWrapper');
        const successWrapper = document.getElementById('successWrapper');
        let isHidden = false;

        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                formWrapper.style.display = 'block';
                successWrapper.style.display = 'none';
                form.reset();
            }, 300);
        }

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 30 && !isHidden) {
                headerTitle.classList.add('hide');
                isHidden = true;
            } else if (scrollTop <= 30 && isHidden) {
                headerTitle.classList.remove('hide');
                isHidden = false;
            }

            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        callBtn.addEventListener('click', function(e) {
            if (!checkbox.checked) {
                e.preventDefault();
                checkboxLabel.classList.remove('shake');
                void checkboxLabel.offsetWidth;
                checkboxLabel.classList.add('shake');
                return;
            }
            openModal();
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formWrapper.style.display = 'none';
            successWrapper.style.display = 'flex';
        });
    });