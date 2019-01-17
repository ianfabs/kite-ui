import Vue from 'vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { 
    faCubes,
    faCube,
    faSignOutAlt, 
    faFile, 
    faFileAlt, 
    faCog, 
    faFolder, 
    faFolderPlus, 
    faExternalLinkAlt,
    faTrash,
    faCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faCubes, 
    faCube, 
    faSignOutAlt, 
    faFile, 
    faFileAlt, 
    faCog, 
    faFolder, 
    faFolderPlus, 
    faExternalLinkAlt,
    faTrash,
    faCircle
);

dom.watch();

Vue.component('fa-icon', FontAwesomeIcon)