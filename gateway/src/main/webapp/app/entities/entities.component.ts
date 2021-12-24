import { Component, Provide, Vue } from 'vue-property-decorator';

import PostService from './blog/post/post.service';
import BlogService from './blog/blog/blog.service';
import TagService from './blog/tag/tag.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('postService') private postService = () => new PostService();
  @Provide('blogService') private blogService = () => new BlogService();
  @Provide('tagService') private tagService = () => new TagService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
