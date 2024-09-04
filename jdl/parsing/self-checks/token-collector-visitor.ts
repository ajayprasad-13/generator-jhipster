/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Alternation, Alternative, NonTerminal, Option, Repetition, RepetitionMandatory, Rule } from 'chevrotain';
import { GAstVisitor } from 'chevrotain';

export default class TokenCollectorVisitor extends GAstVisitor {
  visitNonTerminal(_node: NonTerminal) {}
  visitAlternative(_node: Alternative) {}
  visitOption(_node: Option) {}
  visitRepetition(_node: Repetition) {}
  visitRepetitionMandatory(_node: RepetitionMandatory) {}
  visitAlternation(_node: Alternation) {}
  visitRule(_node: Rule) {}

  actualTokens: any[];

  constructor() {
    super();
    this.actualTokens = [];
  }

  visitTerminal(node) {
    this.actualTokens.push(node.terminalType);
  }

  visitRepetitionMandatoryWithSeparator(node) {
    this.actualTokens.push(node.separator);
  }

  visitRepetitionWithSeparator(node) {
    this.actualTokens.push(node.separator);
  }
}
