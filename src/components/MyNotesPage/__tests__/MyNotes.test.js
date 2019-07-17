import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../Loading';
import MyNotes from '../MyNotes';
import ScrollIndicator from '../../ScrollIndicator';
import Note from '../../Note';

describe('MyNotes.test', () => {
  const props = {
    notes: [],
    cursor: 0,
    loading: false,
    hasMoreNotesToLoad: true,
    fetchLoading: false,
    scrolled: 100,
    loadAmount: 10,
    handleScroll: jest.fn()
  };

  it('should be rendered Looding component', () => {
    const Localprops = {
      ...props,
      loading: true,
      fetchLoading: true
    };
    const wrapper = shallow(<MyNotes {...Localprops} />);
    expect(wrapper.contains(<Loading />)).toBeTruthy();
  });

  it('should be rendered ScrollIndicator component', () => {
    const wrapper = shallow(<MyNotes {...props} />);
    expect(
      wrapper.contains(<ScrollIndicator scrolled={props.scrolled} />)
    ).toBeTruthy();
  });

  it('should be rendered Note component', () => {
    const note = {
      id: 'd537de96-5abc-47e9-8b75-96672cd6501a',
      title: 'ipsam-quia-error',
      subTitle: 'officia omnis asperiores',
      content:
        'Nihil enim autem pariatur qui ipsum molestiae autem sequi. Deleniti et voluptas ut sed maxime. In accusamus sint odit voluptatem quo debitis veritatis excepturi debitis. Nobis qui natus possimus maiores. Voluptatem sapiente nihil sunt quia sit dolorum fuga perferendis ut.\n \rVoluptatem sit ut molestias officiis quasi occaecati sunt rerum excepturi. Ratione ipsam occaecati tempora. Iure ducimus numquam nulla maiores iusto voluptatibus sed iusto.\n \rIste minima harum quia consequuntur id exercitationem qui voluptate. Voluptatem minus omnis vel doloribus voluptatem. Culpa placeat ducimus rem omnis. Aut iure ut doloribus dignissimos. Illo esse illo.\n \rTenetur officiis est nulla voluptatum sed dolorum sint id. A est voluptatem quas dolor nam quidem tenetur in sit. Libero nulla et tenetur voluptas neque qui iusto aliquid nulla. Nisi voluptas sed tenetur vel.\n \rIpsum dicta minima id excepturi explicabo officiis minus quod. Sed reprehenderit aperiam rerum excepturi aperiam sequi facilis beatae. Ut voluptas id aliquam suscipit.\n \rQuia eum voluptatem voluptatem aut animi nesciunt. Qui laudantium praesentium nam dolorum harum ea. Quis optio necessitatibus autem itaque dolorum repellendus eligendi. Et dolore neque non omnis est quis quae saepe suscipit.\n \rEos enim aliquam quidem maiores qui exercitationem. Quis autem dolorem minus dolor. Tenetur asperiores pariatur et molestias itaque cum quia. Sunt ut recusandae in mollitia vero at est.\n \rProvident minima quia. Ullam quo laborum omnis quod. Reiciendis asperiores facere. At sint laborum laudantium fuga et perferendis dolores mollitia. Qui est eius culpa.\n \rRepudiandae unde quia minima accusantium ipsam veritatis corporis qui. Esse corrupti est magni ea. Quia voluptas fugiat ducimus alias libero eum blanditiis voluptates aut.\n \rEt inventore aut consequatur veritatis voluptas vero unde. Repellat magni culpa molestias eos. Similique ab non consequatur quasi. Amet similique sed et rem consequuntur voluptatem. Fugit optio quas occaecati tempore repellendus tenetur. Veritatis dolor placeat accusantium ea sint dolore.\n \rPossimus a quia temporibus. Ipsum et magni. Voluptas molestiae beatae sed at. Et et quasi ut alias ut harum deserunt.\n \rIpsam veniam et sit neque sapiente corporis aut. Ratione voluptas minima perspiciatis inventore sit nulla esse corrupti. A minus sed nulla occaecati quis id cupiditate.\n \rEa enim qui alias soluta et repudiandae magni voluptatem. Rerum harum repellendus magnam illum sunt odit vitae impedit. Deserunt id est minus eum saepe necessitatibus. Provident temporibus consectetur autem ullam officiis non id. Sequi officia voluptatem quisquam natus voluptatibus accusantium.\n \rVoluptate sed beatae deleniti est commodi inventore explicabo velit nobis. Quos asperiores iste exercitationem. Necessitatibus eveniet qui est corrupti sunt. Qui voluptas mollitia excepturi nulla earum porro sint.\n \rNesciunt neque unde qui asperiores sed sed et unde beatae. Sapiente quod dignissimos itaque temporibus ipsum est vel ipsa. Sunt incidunt maiores reiciendis numquam quod rem laudantium.',
      createdAt: '2017-11-14T19:26:43.398Z'
    };
    const Localprops = {
      ...props,
      notes: [note]
    };
    const wrapper = shallow(<MyNotes {...Localprops} />);
    expect(wrapper.contains(<Note note={note} />)).toBeTruthy();
  });

  it('should be rendered Looding component when fetchLoading', () => {
    const Localprops = {
      ...props,
      loading: false,
      fetchLoading: true
    };
    const wrapper = shallow(<MyNotes {...Localprops} />);
    expect(wrapper.contains(<Loading />)).toBeTruthy();
  });

  it('should be rendered Last Note', () => {
    const Localprops = {
      ...props,
      hasMoreNotesToLoad: false
    };
    const wrapper = shallow(<MyNotes {...Localprops} />);
    expect(wrapper.contains('Last Note')).toBeTruthy();
  });

  it('should NOT be rendered Last Note', () => {
    const wrapper = shallow(<MyNotes {...props} />);
    expect(wrapper.contains('Last Note')).toBeFalsy();
  });
});
