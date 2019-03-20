// 这里引用全局js
import '@babel/polyfill';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlockAlt, faBookReader, faBookOpen, faTimes, faList, faUserCog, faBookmark, faPen } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUnlockAlt, faBookReader, faBookOpen, faTimes, faList, faUserCog, faBookmark, faPen)