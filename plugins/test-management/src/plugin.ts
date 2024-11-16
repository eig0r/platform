//
// Copyright © 2024 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import {
  Mixin,
  type Class,
  type Doc,
  type Ref,
  Type,
  type Status,
  type SpaceTypeDescriptor,
  type SpaceType
} from '@hcengineering/core'
import type { Asset, IntlString, Plugin, Resource } from '@hcengineering/platform'

import { plugin } from '@hcengineering/platform'
import { type AnyComponent, type Location, type ResolvedLocation } from '@hcengineering/ui'

import { ActionCategory, Viewlet } from '@hcengineering/view'
import {
  TestSuite,
  TestCase,
  TestProject,
  TestCaseType,
  TestCasePriority,
  TestCaseStatus,
  TestRun,
  TestRunItem,
  TestRunResult
} from './types'

/** @public */
export const testManagementId = 'testManagement' as Plugin

/** @public */
export const testManagementPlugin = plugin(testManagementId, {
  app: {
    TestManagement: '' as Ref<Doc>
  },
  icon: {
    TestManagement: '' as Asset,
    TestManagementVersion: '' as Asset,
    TestManagementApplication: '' as Asset,
    TestCase: '' as Asset,
    TestCases: '' as Asset,
    Home: '' as Asset,
    Estimation: '' as Asset,
    TestSuite: '' as Asset,
    TestProject: '' as Asset,
    TestSuites: '' as Asset,
    TestRuns: '' as Asset,
    RedCircle: '' as Asset,
    StatusDraft: '' as Asset,
    StatusReview: '' as Asset,
    StatusReviewComments: '' as Asset,
    StatusApproved: '' as Asset,
    StatusRejected: '' as Asset,
    Document: '' as Asset,
    TestLibrary: '' as Asset
  },
  class: {
    TestCase: '' as Ref<Class<TestCase>>,
    TestSuite: '' as Ref<Class<TestSuite>>,
    TestProject: '' as Ref<Class<TestProject>>,
    TypeTestCaseType: '' as Ref<Class<Type<TestCaseType>>>,
    TypeTestCasePriority: '' as Ref<Class<Type<TestCasePriority>>>,
    TypeTestCaseStatus: '' as Ref<Class<Type<TestCaseStatus>>>,
    TestRun: '' as Ref<Class<TestRun>>,
    TestRunItem: '' as Ref<Class<TestRunItem>>,
    TypeTestRunResult: '' as Ref<Class<Type<TestRunResult>>>
  },
  descriptors: {
    ProjectType: '' as Ref<SpaceTypeDescriptor>
  },
  mixin: {
    TestCaseTypeData: '' as Ref<Mixin<TestCase>>,
    TestProject: '' as Ref<Mixin<TestProject>>,
    DefaultProjectTypeData: '' as Ref<Mixin<TestProject>>
  },
  string: {
    ConfigLabel: '' as IntlString,
    ConfigDescription: '' as IntlString,
    TestCaseType: '' as IntlString,
    TestCasePriority: '' as IntlString,
    TestCaseStatus: '' as IntlString,
    TestSuite: '' as IntlString,
    SuiteName: '' as IntlString,
    SuiteDescription: '' as IntlString,
    Suite: '' as IntlString,
    TestName: '' as IntlString,
    TestDescription: '' as IntlString,
    TestType: '' as IntlString,
    TestPriority: '' as IntlString,
    TestStatus: '' as IntlString,
    TestEstimatedTime: '' as IntlString,
    TestPreconditions: '' as IntlString,
    TestSteps: '' as IntlString,
    TestAssignee: '' as IntlString,
    TestCase: '' as IntlString,
    TestProject: '' as IntlString,
    TestManagementApplication: '' as IntlString,
    AllTestCases: '' as IntlString,
    AllProjects: '' as IntlString,
    Projects: '' as IntlString,
    CreateProject: '' as IntlString,
    TestCases: '' as IntlString,
    TestManagementDescription: '' as IntlString,
    CreateTestCase: '' as IntlString,
    FullDescription: '' as IntlString,
    EditProject: '' as IntlString,
    ProjectName: '' as IntlString,
    ProjectType: '' as IntlString,
    Members: '' as IntlString,
    RoleLabel: '' as IntlString,
    ProjectMembers: '' as IntlString,
    ManageProjectStatuses: '' as IntlString,
    TestSuites: '' as IntlString,
    CreateTestSuite: '' as IntlString,
    NamePlaceholder: '' as IntlString,
    DescriptionPlaceholder: '' as IntlString,
    TestRuns: '' as IntlString,
    NewTestRun: '' as IntlString,
    TestRun: '' as IntlString,
    TestNamePlaceholder: '' as IntlString,
    ChooseIcon: '' as IntlString,
    NoTestSuite: '' as IntlString,
    StatusDraft: '' as IntlString,
    StatusReview: '' as IntlString,
    StatusReviewComments: '' as IntlString,
    StatusApproved: '' as IntlString,
    StatusRejected: '' as IntlString,
    SetStatus: '' as IntlString,
    Assignee: '' as IntlString,
    Unassigned: '' as IntlString,
    AssignTo: '' as IntlString,
    AssignedTo: '' as IntlString,
    PreviousAssigned: '' as IntlString,
    TestRunName: '' as IntlString,
    NoTestCases: '' as IntlString,
    DueDate: '' as IntlString,
    TestRunItems: '' as IntlString,
    TestRunResult: '' as IntlString,
    TestRunItem: '' as IntlString,
    TestRunNamePlaceholder: '' as IntlString,
    SelectTestSuites: '' as IntlString,
    SelectTestCases: '' as IntlString,
    CreateTestRun: '' as IntlString,
    TestLibrary: '' as IntlString
  },
  category: {
    TestManagement: '' as Ref<ActionCategory>
  },
  component: {
    TestCaseSearchIcon: '' as AnyComponent,
    TestCases: '' as AnyComponent,
    CreateProject: '' as AnyComponent,
    TestManagementSpaceHeader: '' as AnyComponent,
    TestCaseStatusIcon: '' as AnyComponent,
    PriorityIconPresenter: '' as AnyComponent,
    TestCaseStatusPresenter: '' as AnyComponent,
    TestSuites: '' as AnyComponent,
    CreateTestSuite: '' as AnyComponent
  },
  ids: {
    NoParent: '' as Ref<TestSuite>,
    TestCaseUpdatedActivityViewlet: '' as Ref<TestCase>
  },
  spaceType: {
    TestCaseType: '' as Ref<SpaceType>,
    DefaultProject: '' as Ref<SpaceType>
  },
  spaceTypeDescriptor: {
    TestCaseType: '' as Ref<SpaceTypeDescriptor>
  },
  template: {
    DefaultProject: '' as Ref<SpaceTypeDescriptor>
  },
  space: {
    DefaultProject: '' as Ref<TestProject>
  },
  viewlet: {
    TableTestCase: '' as Ref<Viewlet>,
    TableTestSuites: '' as Ref<Viewlet>,
    TableTestRun: '' as Ref<Viewlet>,
    SuiteTestCases: '' as Ref<Viewlet>,
    ListTestCase: '' as Ref<Viewlet>
  },
  testCaseTypeStatus: {
    Draft: '' as Ref<Status>,
    ReviewRequired: '' as Ref<Status>,
    NeedFixes: '' as Ref<Status>,
    Ready: '' as Ref<Status>
  },
  taskType: {
    TestCase: '' as Ref<TestCase>
  },
  function: {
    GetTestSuiteLink: '' as Resource<(doc: Ref<Doc>) => Location>
  },
  resolver: {
    Location: '' as Resource<(loc: Location) => Promise<ResolvedLocation | undefined>>
  }
})

/**
 * @public
 */
export default testManagementPlugin