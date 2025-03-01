/**
 * Copyright 2019, Danang Galuh Tegar Prasetyo.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Metadata, OperationWarning, Row } from './../types'
import Rows from "../types/Rows";

export interface ISelectOperationResult {
	getAffectedItemsCount(): number
	getAffectedRowsCount(): number
	getAutoIncrementValue(): number
	getGeneratedIds(): string[]
	getWarnings(): OperationWarning[]
	getWarningsCount(): number
	getRows(): Row[][]
	getMetadata(): Metadata
	getObjects(): Object[]
	fetchAll(): Rows[]
}

export default ISelectOperationResult
