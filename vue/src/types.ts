/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
import { IScope } from 'angular';

export interface LookupTableEntry {
  match_value: string;
  comparison: string;
  out_value: string;
}

export type LookupTable = LookupTableEntry[];

export interface Variable {
  id: string|number;
  name: string;
  description: string;
  is_pre_configured?: boolean;
  category: string;
  idvariable: string;
  order: string;
  type: string;
  hasAdvancedSettings?: boolean;
  lookup_table: LookupTable;
}

export interface VariableCategory {
  name: string;
  types: Variable[];
}

export interface Draft {
  idcontainerversion: string|number;
  idcontainer: string;
  idsite: string|number;
  status: string;
  revision: number;
  name: string;
  created_date: string;
  created_date_pretty: string;
  description: string;
  updated_date: string;
  updated_date_pretty: string;
}

export interface Container {
  context: string;
  created_date: string;
  created_date_pretty: string;
  description: string;
  draft: Draft;
  idcontainer: string;
  idsite: string|number;
  name: string;
  releases: []; // TODO
  status: string;
  updated_date: string;
  updated_date_pretty: string;
  versions: []; // TODO
  // TODO
}

// temporary, will be converted later
interface TagManagerHelper {
  editVariable(
    $scope: IScope|null,
    idContainer: string|number,
    idContainerVersion: string|number,
    idVariable: string|number,
    callback: (variable: Variable) => void,
    variableType?: string,
  ): void;
  selectVariable(callback: (variable: Variable) => void): void;
  insertTextSnippetAtElement(inputField: HTMLTextAreaElement|HTMLInputElement, textToAdd: string): void;
}

declare global {
  interface Window {
    tagManagerHelper: TagManagerHelper;
  }
}
