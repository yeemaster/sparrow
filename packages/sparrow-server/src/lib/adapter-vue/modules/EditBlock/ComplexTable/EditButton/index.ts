import * as fsExtra from 'fs-extra';
import VueParse from '../../../generator/VueParse';
import * as path from 'path';
import Config from '../../../../config';
import Button from '../../../component/Button';


export default class EditButton extends Button{
  name: string = 'EditButton';
  vueParse: any;
  constructor (params: any) {
    super(params)
    this.config.model.custom.label = '编辑';
    this.config.model.attr.size = 'mini';
    this.config.model.attr['@click'] = 'handleUpdate';
    this.setAttrsToStr();
    this.init();
  }
  
  private init () {
    const fileStr = fsExtra.readFileSync(path.join(Config.templatePath, 'EditBlock/ComplexTable/EditButton',  'index.vue'), 'utf8');
    this.vueParse = new VueParse(this.uuid, fileStr);
  }
}