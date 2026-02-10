import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  // Store new contact form submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async Bool {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
    true;
  };

  // Retrieve all contact form submissions
  public shared ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };
};
