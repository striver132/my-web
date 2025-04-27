<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__avatar-switch">
        <div class="contact__avatar-card contact__avatar-card--active">
          <img src="/src/assets/img/me2.jpg" alt="avatar" class="contact__avatar-img" />
        </div>
        <div class="contact__avatar-switch-icon">
          <svg width="32" height="32" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H26M26 20L21 15M26 20L21 25" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 8H6M6 8L11 13M6 8L11 3" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="contact__avatar-card contact__avatar-card--default">
          <svg class="contact__avatar-default-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#E0E0E0"/>
            <circle cx="24" cy="20" r="8" fill="#BDBDBD"/>
            <ellipse cx="24" cy="36" rx="12" ry="7" fill="#BDBDBD"/>
          </svg>
        </div>
      </div>
      <form ref="form" @submit.prevent="sendEmail" class="contact__form">
        <div class="contact__form-decoration contact__form-decoration--1"></div>
        <div class="contact__form-decoration contact__form-decoration--2"></div>
        <div class="contact__form-decoration contact__form-decoration--3"></div>
        <div class="contact__form-group">
          <label for="name" class="contact__label">{{ $t('contact.name') }}</label>
          <input type="text" id="name" name="name" class="contact__input" required />
        </div>
        <div class="contact__form-group">
          <label for="email" class="contact__label">{{ $t('contact.email') }}</label>
          <input type="email" id="email" name="title" class="contact__input" required />
        </div>
        <div class="contact__form-group">
          <label for="message" class="contact__label">{{ $t('contact.message') }}</label>
          <textarea id="message" name="message" class="contact__input contact__input--textarea" required></textarea>
        </div>
        <button type="submit" class="contact__submit">
          <span class="contact__submit-text">{{ $t('contact.sendMessage') }}</span>
        </button>
      </form>
    </div>
    <div v-if="showPopup" class="contact__popup-overlay" @click.self="closePopup">
      <div class="contact__popup" :class="{'contact__popup--success': popupType==='success','contact__popup--error': popupType==='error'}">
        <span class="contact__popup__message">{{ popupMessage }}</span>
        <button class="contact__popup__close" @click="closePopup">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null);
const showPopup = ref(false);
const popupMessage = ref('');
const popupType = ref('');

const closePopup = () => {
  showPopup.value = false;
};

// Method to send the email
const sendEmail = () => {
  emailjs
    .sendForm(
      'service_bzfl4v8', // Replace with your EmailJS Service ID
      'template_4voshzv', // Replace with your EmailJS Template ID
      form.value, // Reference to the form DOM element
      {
        publicKey: '4J_DxqrWU2Jn0iqnt', // Replace with your EmailJS Public Key
      }
    )
    .then(
      () => {
        console.log('SUCCESS!');
        popupMessage.value = 'Email sent successfully!';
        popupType.value = 'success';
        showPopup.value = true;
        form.value.reset(); // Reset form after successful submission
      },
      (error) => {
        console.log('FAILED...', error.text);
        popupMessage.value = 'Failed to send email: ' + error.text;
        popupType.value = 'error';
        showPopup.value = true;
      }
    );
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    position: relative;
  }

  &__form {
    width: 100%;
    padding: 3rem;
    background-color: #f9f9f9;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
    border: none;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    }
  }

  &__form-decoration {
    position: absolute;
    border-radius: 12px;
    z-index: -1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    
    &--1 {
      top: -20px;
      left: -60px;
      width: 140px;
      height: 100px;
      background: url('/src/assets/img/contact/cat.png') center/cover;
      transform: rotate(-15deg);
    }
    
    &--2 {
      top: 20px;
      right: -40px;
      width: 120px;
      height: 80px;
      background: url('/src/assets/img/contact/m.png') center/cover;
      transform: rotate(10deg);
    }
    
    &--3 {
      bottom: -30px;
      right: 60px;
      width: 160px;
      height: 90px;
      background: url('/src/assets/img/contact/laptop.png') center/cover;
      transform: rotate(5deg);
    }
  }

  &__form-footer {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #252525;
    opacity: 0.5;
  }

  &__form-group {
    margin-bottom: 2rem;
  }

  &__label {
    display: block;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #333333;
  }

  &__input {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #aaaaaa;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    }

    &--textarea {
      min-height: 150px;
      resize: vertical;
    }

    &::placeholder {
      color: #666666;
    }
  }

  &__submit {
    width: 100%;
    padding: 1rem;
    background-color: #333333;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #222222;
      transform: translateY(-2px);
    }

    &-text {
      display: inline-block;
    }
  }

  &__avatar-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    gap: 1.5rem;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &__avatar-card {
    width: 90px;
    height: 90px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, filter 0.2s;
    position: relative;
    overflow: hidden;
    &--active {
      filter: none;
    }
    &--default {
      background: linear-gradient(135deg, #f5f5f5 60%, #e0e0e0 100%);
      box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    }
  }

  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }

  &__avatar-default-icon {
    width: 60px;
    height: 60px;
    display: block;
  }

  &__avatar-switch-icon {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    svg {
      display: block;
    }
  }

  // 响应式适配
  @media (max-width: 767px) {
    &__avatar-card {
      width: 64px;
      height: 64px;
      border-radius: 16px;
    }
    &__avatar-switch-icon {
      width: 32px;
      height: 32px;
    }
    &__avatar-default-icon {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 400px) {
    &__avatar-switch {
      gap: 0.5rem;
    }
    &__avatar-card {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }
    &__avatar-switch-icon {
      width: 24px;
      height: 24px;
    }
    &__avatar-default-icon {
      width: 28px;
      height: 28px;
    }
  }
}

// 响应式设计断点
// 大屏幕设备 (1200px 以上)
@media (min-width: 1200px) {
  .contact {
    &__container {
      max-width: 800px;
    }

    &__form {
      padding: 4rem;
    }

    &__input {
      font-size: 1.1rem;
    }
  }
}

// 平板设备 (768px - 1199px)
@media (max-width: 1199px) {
  .contact {
    padding: 1.5rem;

    &__form {
      padding: 2.5rem;
      box-shadow: 15px 15px 0 #000000;
    }
  }
}

// 大手机设备 (576px - 767px)
@media (max-width: 767px) {
  .contact {
    padding: 1rem;
    min-height: auto;

    &__form {
      padding: 2rem;
      box-shadow: 10px 10px 0 #000000;
    }

    &__form-group {
      margin-bottom: 1.5rem;
    }

    &__label {
      font-size: 0.8rem;
    }

    &__input {
      padding: 0.875rem;
      font-size: 0.95rem;

      &:focus {
        padding: calc(0.875rem - 1px);
      }
    }
  }
}

// 小手机设备 (575px 以下)
@media (max-width: 575px) {
  .contact {
    padding: 0.75rem;

    &__form {
      padding: .5rem;
      box-shadow: 0px 0px 0 #000000;
    }

    &__form-group {
      margin-bottom: 1.25rem;
    }

    &__label {
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }

    &__input {
      padding: 0.75rem;
      font-size: 0.9rem;

      &--textarea {
        min-height: 120px;
      }

      &:focus {
        padding: calc(0.75rem - 1px);
      }
    }

    &__submit {
      padding: 0.875rem;
      font-size: 0.9rem;
    }
  }
}

// 超小屏幕设备 (320px 以下)
@media (max-width: 320px) {
  .contact {
    padding: 0.5rem;

    &__form {
      padding: 1rem;
      box-shadow: 5px 5px 0 #000000;
    }

    &__form-group {
      margin-bottom: 1rem;
    }

    &__input {
      padding: 0.625rem;
      font-size: 0.85rem;

      &:focus {
        padding: calc(0.625rem - 1px);
      }
    }

    &__submit {
      padding: 0.75rem;
      font-size: 0.85rem;
    }
  }
}

.contact__popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.contact__popup {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
  max-width: 90%;
  width: 320px;
  position: relative;
  text-align: center;
}
.contact__popup--success { border-left: 6px solid #4caf50; }
.contact__popup--error { border-left: 6px solid #f44336; }
.contact__popup__message {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}
.contact__popup__close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #666;
}

@media (max-width: 576px) {
  .contact__popup { width: 85%; padding: 1rem; }
  .contact__popup__message { font-size: 0.9rem; }
  .contact__popup__close { font-size: 1rem; }
}
</style>