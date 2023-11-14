// LocalStorage に theme が保存されていない or theme が system の場合
if (!('theme' in localStorage) || localStorage.theme === 'system') {
    // OS の設定を読み取る
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // OS の設定がダークモードの場合、<html> に dark クラスを付与する
      document.documentElement.classList.add('dark')
    }
    // LocalStorage に設定を保存する
    localStorage.setItem('theme', 'system')
  } else if (localStorage.theme === 'dark') {// LocalStorage に theme が保存されていて、theme が dark の場合
    document.documentElement.classList.add('dark')
  } else { // それ以外の場合
    document.documentElement.classList.remove('dark')
  }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mediaQueryLlistener)